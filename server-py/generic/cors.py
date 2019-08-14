#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

from generic.config import CORS_ORIGINS


class CorsMiddleware(object):
    """
    Middleware for CORS processing.
    """

    def process_response(self, req, res, resource, req_succeeded):
        origin = req.get_header('Origin')

        if origin in CORS_ORIGINS:
            res.set_header('Access-Control-Allow-Origin', origin)

        if (req_succeeded
                and req.method == 'OPTIONS'
                and req.get_header('Access-Control-Request-Method')
            ):
            #
            # Patch pre-flight response
            #
            allow = res.get_header('Allow')
            res.delete_header('Allow')

            allow_headers = req.get_header(
                'Access-Control-Request-Headers',
                default='*'
            )

            res.set_headers((
                ('Access-Control-Allow-Methods', allow),
                ('Access-Control-Allow-Headers', allow_headers),
                ('Access-Control-Max-Age', '3600'),  # 1 hour
            ))
