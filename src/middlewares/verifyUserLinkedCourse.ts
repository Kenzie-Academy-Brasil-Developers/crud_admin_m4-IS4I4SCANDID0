// import { NextFunction, Request, Response } from "express";
// import { QueryResult } from "pg";
// import { client } from "../database";
// import AppError from "../errors/AppError";

// const verifyUserLinkedCourse = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
//   const courseId = req.params.id;

//   const queryCourseId: QueryResult = await client.query(
//     `SELECT * FROM "users" WHERE "id" = $1;`,
//     [courseId]
//   );

//   if(queryCourseId.rowCount === 0 ) {
//     throw new AppError("No course found", 404)
//   };
  
//   return next();
// };

// export { verifyUserLinkedCourse }