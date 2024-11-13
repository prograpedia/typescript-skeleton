import { Get, JsonController, Req, Post, UploadedFiles } from "@prograpedia/routing-controllers";
import { Request } from "express";

interface MessageResponse {
    message: string;
}

@JsonController()
class HomeController {

    @Get('/')
    index(@Req() _req: Request): MessageResponse {
        return { message: 'Hello, World!' };
    }

    @Post('/upload')
    async upload(@Req() _req: Request, @UploadedFiles('file') files: Express.Multer.File[]): Promise<MessageResponse> {
        try {
            if (!files || files.length === 0) {
                return { message: 'No files uploaded' };
            }

            return { message: `${files.length} files uploaded` };
        } catch (error) {
            console.error('Upload error:', error);

            throw new Error('File upload failed. Please try again.');
        }
    }
}

export default HomeController;
