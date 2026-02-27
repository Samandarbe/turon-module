import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelOption } from '../../option/schemas/option.schema';
export declare class ModelOptionSelect {
    name: Lang;
    option: ModelOption;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelOptionSelectSchema: mongoose.Schema<ModelOptionSelect, mongoose.Model<ModelOptionSelect, any, any, any, (mongoose.Document<unknown, any, ModelOptionSelect, any, mongoose.DefaultSchemaOptions> & ModelOptionSelect & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelOptionSelect, any, mongoose.DefaultSchemaOptions> & ModelOptionSelect & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelOptionSelect>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelOptionSelect, mongoose.Document<unknown, {}, ModelOptionSelect, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelOptionSelect & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelOptionSelect, mongoose.Document<unknown, {}, ModelOptionSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOptionSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    option?: mongoose.SchemaDefinitionProperty<ModelOption, ModelOptionSelect, mongoose.Document<unknown, {}, ModelOptionSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOptionSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelOptionSelect, mongoose.Document<unknown, {}, ModelOptionSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOptionSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelOptionSelect, mongoose.Document<unknown, {}, ModelOptionSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOptionSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelOptionSelect, mongoose.Document<unknown, {}, ModelOptionSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOptionSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelOptionSelect>;
