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


class User(Endpoint):
    """
    Handle requests related to user(s).
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, userId: str = None, resource: str = None):
        log.debug('[FAKE] Users')

        self.showParams(userId, resource)

        if userId:
            if resource:
                self.getUserResource(res, userId, resource)

            else:
                self.getUserData(res, userId)

        else:
            self.getUserList(res)

    def getUserList(self, res: falcon.Response):
        with open(
                DATA_PATH + 'user-list.json',
                'r',
                encoding='utf8') as f:
            data = f.read().replace('\n', '')

            res.body = data
            res.status = falcon.HTTP_200
            res.content_type = 'application/json; charset=utf-8'

    def getUserData(self, res: falcon.Response, userId: str):
        with open(
                DATA_PATH + 'user-list.json',
                'r',
                encoding='utf8') as f:
            data = json.load(f)

            proj = next((obj for obj in data if obj['id'] == userId), None)

            if proj:
                res.body = json.dumps(proj)
                res.status = falcon.HTTP_200
                res.content_type = 'application/json; charset=utf-8'
            else:
                res.body = 'No project matches userId ' + userId + '.'
                res.status = falcon.HTTP_404
                res.content_type = 'text/plain; charset=utf-8'

    def getUserResource(self, res: falcon.Response, userId: str, resource: str):
        pass
