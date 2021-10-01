import { createParamDecorator, ExecutionContext } from "@nestjs/common";

import { getMultipartRequest } from "../fastify";
import { StorageFile } from "../storage/storage";

export const UploadedFiles = createParamDecorator(
  async (
    data: any,
    ctx: ExecutionContext,
  ): Promise<Record<string, StorageFile[]> | StorageFile[] | undefined> => {
    const req = getMultipartRequest(ctx.switchToHttp());

    return req?.storageFiles;
  },
);
