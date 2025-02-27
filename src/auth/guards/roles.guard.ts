import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common"

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private readonly requiredRole: string){}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()
        const user = request.user;

        if(user?.role !== this.requiredRole){
            throw new ForbiddenException('Access denied!')
        }

        return true
    }
}