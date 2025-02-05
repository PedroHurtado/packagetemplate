import { model, Schema } from "mongoose";
import { BaseEntitySchema } from "@enroll-server/common";
import { IEntityData } from "../../domain/entity/entity";


const schema = new Schema<IEntityData>({
    ...BaseEntitySchema,
   
}, {
    versionKey: false
})

export const Entity = model<IEntityData>('Entity', schema);