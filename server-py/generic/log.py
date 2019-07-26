#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import logging


def setup(level):
    """
    Setup custom logging.
    """

    FORMAT = '%(asctime)-15s: %(module)s: %(message)s'

    logging.basicConfig(format=FORMAT)

    logger = logging.getLogger('app')

    if level == 'DEBUG':
        logger.setLevel(logging.DEBUG)
    else:
        logger.setLevel(logging.INFO)

    return logger
