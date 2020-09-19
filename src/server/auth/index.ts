import Router from 'koa-router';
import {handleGoogleRegister} from './google/generateLink';
import {handleGoogleCallback} from './google/googleCallback';

const router = new Router();

router.get('/google-callback', handleGoogleCallback);
router.get('/google-register', handleGoogleRegister);

export default router;
