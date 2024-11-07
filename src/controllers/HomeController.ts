import {Get, JsonController, Req} from "@prograpedia/routing-controllers";
import {Post, UploadedFiles} from "@prograpedia/routing-controllers";

interface MessageResponse {
    message: string;
}

@JsonController()
class HomeController {
    @Get('/')
    index(@Req() _req: Request): MessageResponse {
        return {message: `Hello, World!`};
    }

    @Post('/upload')
    upload(@Req() _req: Request, @UploadedFiles('file') file: []): MessageResponse {
        return {message: `${file.length} files uploaded`};
    }
}

// noinspection JSUnusedGlobalSymbols
export default HomeController;
