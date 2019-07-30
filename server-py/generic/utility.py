#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import falcon
import logging

from requests.exceptions import HTTPError

log = logging.getLogger('app')


def ExNoConnection():
    """
    Handle exception 'requests.ConnectionError'
    """
    err_title = 'Connection error'
    err_desc = 'Is network available?'

    log.error(err_title + ': ' + err_desc)

    raise falcon.HTTPError(
        falcon.HTTP_409, err_title, err_desc)


def ExNoTimeout():
    """
    Handle exception 'requests.Timeout'
    """
    err_title = 'Timeout error'
    err_desc = 'Is network available?'

    log.error(err_title + ': ' + err_desc)

    raise falcon.HTTPError(
        falcon.HTTP_408, err_title, err_desc)


def ExHttpError(e: HTTPError):
    """
    Handle exception 'requests.HTTPError'
    """
    err_title = 'Remote server error'

    log.error(err_title, e.response.content)

    raise falcon.HTTPError(
        falcon.HTTP_502, err_title, str(e))


def ExGeneral(e: Exception):
    """
    Handle exception 'requests.HTTPError'
    """
    err_title = 'Server exception'

    log.error(err_title + ': ' + str(e))

    raise falcon.HTTPError(
        falcon.HTTP_500, err_title, str(e))


def GetAuthHeader(req: falcon.Request):
    """
    Extract authorization header from request.
    """
    auth = req.get_header('Authorization')

    if auth:
        log.debug('Auth : Header found')
        return auth

    else:
        raise falcon.HTTPError(
            falcon.HTTP_400, 'Error', 'Authorization header is missing.')


def GetSessionHeader(req: falcon.Request):
    """
    Extract custon session headers from request.
    """
    sessName = req.get_header('insight-sess-n')

    if sessName:
        log.debug('Session Name: ' + sessName)

    else:
        raise falcon.HTTPError(
            falcon.HTTP_400, 'Error', 'Session name is missing.')

    sessValue = req.get_header('insight-sess-v')

    if sessName:
        log.debug('Session Value: ' + sessValue)

    else:
        raise falcon.HTTPError(
            falcon.HTTP_400, 'Error', 'Session value is missing.')

    return sessName + '=' + sessValue
