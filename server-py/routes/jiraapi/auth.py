#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import logging
import falcon

log = logging.getLogger('app')


class AuthLogin():
    """
    Handle login requests.
    """

    def on_get(self, req: falcon.Request, res: falcon.Response):
        log.debug('[JIRA] Login')

        res.body = 'LOGIN'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'


class AuthLogout():
    """
    Handle logout requests.
    """

    def on_get(self, req: falcon.Request, res: falcon.Response):
        log.debug('[JIRA] Logout')

        res.body = 'LOGOUT'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'
