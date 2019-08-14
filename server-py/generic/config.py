#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

"""
Server mode. One of 'FAKE' or 'JIRA'.
"""
MODE = 'FAKE'

"""
URL of JIRA server.
"""
SERVER_URL = 'https://server.path/'

"""
Authorization scheme to be used. One of 'COOKIE' or 'BEARER'
"""
SERVER_AUTH_SCHEME = 'COOKIE'

"""
Allow CORS?
Unless necessary, disallow in production environment.
"""
CORS_ALLOW = True

"""
Allow CORS from these origins.
"""
CORS_ORIGINS = [
    'http://localhost:4200'
]
