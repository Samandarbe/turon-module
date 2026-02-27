import mongoose from 'mongoose';
import { ModelProductInfo } from '../../product';
import { Lang } from '../../interfaces';
import { ModelOption } from '../../option';
import { ModelOptionSelect } from '../../option-select';
export declare class ModelProductOption {
    product_info: ModelProductInfo;
    option: ModelOption;
    option_select: ModelOptionSelect;
    value?: string;
    value_name: Lang;
}
export declare const ModelProductOptionSchema: mongoose.Schema<ModelProductOption, mongoose.Model<ModelProductOption, any, any, any, (mongoose.Document<unknown, any, ModelProductOption, any, mongoose.DefaultSchemaOptions> & ModelProductOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelProductOption, any, mongoose.DefaultSchemaOptions> & ModelProductOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelProductOption>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelProductOption, mongoose.Document<unknown, {}, ModelProductOption, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelProductOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo, ModelProductOption, mongoose.Document<unknown, {}, ModelProductOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    option?: mongoose.SchemaDefinitionProperty<ModelOption, ModelProductOption, mongoose.Document<unknown, {}, ModelProductOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    option_select?: mongoose.SchemaDefinitionProperty<ModelOptionSelect, ModelProductOption, mongoose.Document<unknown, {}, ModelProductOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    value?: mongoose.SchemaDefinitionProperty<string | undefined, ModelProductOption, mongoose.Document<unknown, {}, ModelProductOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    value_name?: mongoose.SchemaDefinitionProperty<Lang, ModelProductOption, mongoose.Document<unknown, {}, ModelProductOption, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductOption & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelProductOption>;
