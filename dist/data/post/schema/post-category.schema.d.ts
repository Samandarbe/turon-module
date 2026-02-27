import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
export declare class ModelPostCategory {
    name: Lang;
    menu: ModelMenu;
    is_deleted: boolean;
    position: number;
    deleted_at: string;
}
export declare const ModelPostCategorySchema: mongoose.Schema<ModelPostCategory, mongoose.Model<ModelPostCategory, any, any, any, (mongoose.Document<unknown, any, ModelPostCategory, any, mongoose.DefaultSchemaOptions> & ModelPostCategory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPostCategory, any, mongoose.DefaultSchemaOptions> & ModelPostCategory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPostCategory>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPostCategory, mongoose.Document<unknown, {}, ModelPostCategory, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPostCategory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelPostCategory, mongoose.Document<unknown, {}, ModelPostCategory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelPostCategory, mongoose.Document<unknown, {}, ModelPostCategory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelPostCategory, mongoose.Document<unknown, {}, ModelPostCategory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelPostCategory, mongoose.Document<unknown, {}, ModelPostCategory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelPostCategory, mongoose.Document<unknown, {}, ModelPostCategory, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPostCategory>;
