#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import json
import falcon
import logging

from generic.Endpoint import Endpoint

log = logging.getLogger('app')

"""
Path to data files - relative to 'server-py'.
"""
DATA_PATH = './routes/fakeapi/data/'


class Project(Endpoint):
    """
    Handle requests related to project(s)
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, projId: str = None, resource: str = None):
        log.debug('[FAKE] Projects/GET')

        self.showParams(projId, resource)

        if projId:
            if resource:
                self.getProjectResource(res, projId, resource)

            else:
                self.getProjectData(res, projId)

        else:
            self.getProjectList(res)

    def getProjectList(self, res: falcon.Response):
        with open(
                DATA_PATH + 'project-list.json',
                'r',
                encoding='utf8') as f:
            data = f.read().replace('\n', '')

            res.body = data
            res.status = falcon.HTTP_200
            res.content_type = 'application/json; charset=utf-8'

    def getProjectData(self, res: falcon.Response, projId: str):
        with open(
                DATA_PATH + 'project-list.json',
                'r',
                encoding='utf8') as f:
            data = json.load(f)

            proj = next((obj for obj in data if obj['id'] == projId), None)

            if proj:
                res.body = json.dumps(proj)
                res.status = falcon.HTTP_200
                res.content_type = 'application/json; charset=utf-8'
            else:
                res.body = 'No project matches projId ' + projId + '.'
                res.status = falcon.HTTP_404
                res.content_type = 'text/plain; charset=utf-8'

    def getProjectResource(self, res: falcon.Response, projId: str, resource: str):
        pass
