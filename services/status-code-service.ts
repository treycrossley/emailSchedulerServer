export const gqlStatusReturn = (opName: string = "", err: any) => {
    if (err instanceof Error) {
        return {
            code: 500,
            success: false,
            message: `${opName} operation failed`,
        }
    }
     return {
            code: 200,
            success: true,
            message: `${opName} operation succeeded`,
        }

}