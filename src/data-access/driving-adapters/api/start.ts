import 'module-alias/register';

import { Server } from "./models/server.model";

const server = new Server();
server.listen();