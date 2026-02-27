import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { Lang } from '../../interfaces';
export declare class ModelVariation {
    name: Lang;
    type: string;
    customor: ModelCustomers;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelVariationSchema: mongoose.Schema<ModelVariation, mongoose.Model<ModelVariation, any, any, any, (mongoose.Document<unknown, any, ModelVariation, any, mongoose.DefaultSchemaOptions> & ModelVariation & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelVariation, any, mongoose.DefaultSchemaOptions> & ModelVariation & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelVariation>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customor?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelVariation, mongoose.Document<unknown, {}, ModelVariation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariation & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelVariation>;
