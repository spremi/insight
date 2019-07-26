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


class User():
    """
    Handle requests related to user(s).
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, userId: str = None, resource: str = None):
        log.debug('[JIRA] Users')

        res.body = 'USERS'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'
