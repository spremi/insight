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

log = logging.getLogger('app')


class AuthLogin():
    """
    Handle login requests.
    """

    def on_post(self, req: falcon.Request, res: falcon.Response):
        log.debug('[FAKE] Login')

        result = {
            'session': {
                'name': 'FAKESESSION',
                'value': 'LOGIN00000',
            }
        }

        res.body = json.dumps(result)
        res.status = falcon.HTTP_200


class AuthLogout():
    """
    Handle logout requests.
    """

    def on_post(self, req: falcon.Request, res: falcon.Response):
        log.debug('[FAKE] Logout')

        res.body = 'LOGOUT'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'