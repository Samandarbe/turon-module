import mongoose from 'mongoose';
import { ModelMenu } from '../../menu/schemas/menu.schema';
import { ModelOption } from '../../option';
export declare class ModelMenuOption {
    option: ModelOption;
    menu: ModelMenu;
    on_filter: boolean;
}
export declare const ModelMenuOptionSchema: mongoose.Schema<ModelMenuOption, mongoose.Model<ModelMenuOption, any, any, any, (mongoose.Document<unknown, any, ModelMenuOption, any, mongoose.DefaultSchemaOptions> & ModelMenuOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelMenuOption, any, mongoose.DefaultSchemaOptions> & ModelMenuOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelMenuOption>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelMenuOption, mongoose.Document<unknown, {}, ModelMenuOption, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelMenuOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    option?: mongoose.SchemaDefinitionProperty<ModelOption, ModelMenuOption, mongoose.Document<unknown, {}, ModelMenuOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenuOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelMenuOption, mongoose.Document<unknown, {}, ModelMenuOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenuOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    on_filter?: mongoose.SchemaDefinitionProperty<boolean, ModelMenuOption, mongoose.Document<unknown, {}, ModelMenuOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelMenuOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelMenuOption>;
