#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import json
import falcon
import requests
import logging

from requests.exceptions import HTTPError

from generic.config import SERVER_URL, SERVER_AUTH_SCHEME
from generic.utility import ExNoConnection, ExNoTimeout, ExHttpError, ExGeneral
from generic.utility import GetAuthHeader, GetSessionHeader

log = logging.getLogger('app')


class Endpoint:
    """
    Represents a generic endpoint in this application.

    Attributes:
        name    Name of endpoint - used in logs etc.
        auth    Authorization header extracted, if any.
        sess    Custom session header extracted, if any.
    """

    def __init__(self, name):
        self.name = name
        self.auth = None
        self.sess = None

    def showParams(self, param1: str, param2: str):
        """
        Show endpoint parameters.
        """
        if param1:
            if param2:
                log.debug(self.name + '/' + param1 + '/' + param2)
            else:
                log.debug(self.name + '/' + param1)
        else:
            log.debug(self.name)

    def getAuthInfo(self, req: falcon.Request):
        """
        Get authorization information from request headers.
        """
        if SERVER_AUTH_SCHEME == 'BEARER':
            self.sess = GetAuthHeader(req)

        elif SERVER_AUTH_SCHEME == 'COOKIE':
            self.sess = GetSessionHeader(req)

        else:
            # TODO: Raise server configuration error.
            pass

    def reqServer(
            self,
            req: falcon.Request,
            res: falcon.Response,
            method: str,
            url: str,
            headers,
            data):
        """
        Send request to the server.
        """
        try:
            serverResponse = requests.request(
                method,
                url,
                headers=headers,
                data=json.dumps(data)
            )

            serverResponse.raise_for_status()

            return serverResponse

        except requests.ConnectionError:
            ExNoConnection()

        except requests.Timeout:
            ExNoTimeout()

        except HTTPError as he:
            ExHttpError(he)

        except Exception as e:
            ExGeneral(e)

        finally:
            pass
