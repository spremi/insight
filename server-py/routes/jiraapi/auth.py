#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import json
import logging
import falcon

from generic.config import SERVER_URL
from generic.Endpoint import Endpoint

log = logging.getLogger('app')

"""
JIRA REST API for basic authentication.
See: https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/
"""
JIRA_AUTH_BASIC = SERVER_URL + 'auth/1/session'


class AuthLogin(Endpoint):
    """
    Handle login requests.
    """

    def on_post(self, req: falcon.Request, res: falcon.Response):
        log.debug('[JIRA] Login')

        #
        # Extract JSON payload
        #
        data = json.load(req.bounded_stream)

        userName = ''
        userPass = ''

        if 'user' in data:
            userName = data['user']
        else:
            raise falcon.HTTPError(
                falcon.HTTP_400, self.ErrTitle, 'Username is missing.')

        if 'pass' in data:
            userPass = data['pass']
        else:
            raise falcon.HTTPError(
                falcon.HTTP_400, self.ErrTitle, 'Password is missing.')

        jiraResponse = self.reqServer(
            req,
            res,
            'POST',
            JIRA_AUTH_BASIC,
            headers={'Content-Type': 'application/json'},
            data={'username': userName, 'password': userPass}
        )

        res.body = jiraResponse.text
        res.status = falcon.HTTP_200
        res.content_type = 'application/json; charset=utf-8'


class AuthLogout(Endpoint):
    """
    Handle logout requests.
    """

    def on_get(self, req: falcon.Request, res: falcon.Response):
        log.debug('[JIRA] Logout')

        res.body = 'LOGOUT'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'
