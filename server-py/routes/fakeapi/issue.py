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


class Issue(Endpoint):
    """
    Handle requests related to issue(s).
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, issueId: str = None, resource: str = None):
        log.debug('[FAKE] Issues')

        self.showParams(issueId, resource)

        if issueId:
            if resource:
                self.getIssueResource(res, issueId, resource)

            else:
                self.getIssueData(res, issueId)

        else:
            self.getIssueList(res)

    def getIssueList(self, res: falcon.Response):
        with open(
                DATA_PATH + 'issue-list.json',
                'r',
                encoding='utf8') as f:
            data = f.read().replace('\n', '')

            res.body = data
            res.status = falcon.HTTP_200
            res.content_type = 'application/json; charset=utf-8'

    def getIssueData(self, res: falcon.Response, issueId: str):
        with open(
                DATA_PATH + 'issue-list.json',
                'r',
                encoding='utf8') as f:
            data = json.load(f)

            proj = next((obj for obj in data if obj['id'] == issueId), None)

            if proj:
                res.body = json.dumps(proj)
                res.status = falcon.HTTP_200
                res.content_type = 'application/json; charset=utf-8'
            else:
                res.body = 'No issue matches issueId ' + issueId + '.'
                res.status = falcon.HTTP_404
                res.content_type = 'text/plain; charset=utf-8'

    def getIssueResource(self, res: falcon.Response, projId: str, resource: str):
        pass
