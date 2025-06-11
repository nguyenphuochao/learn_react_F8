import { TYPE_WARN, TYPE_ERROR } from "./constants.js";

import logger from "./logger.js";

logger('Hello World');
logger('Hello World', TYPE_WARN);
logger('Hello World', TYPE_ERROR);