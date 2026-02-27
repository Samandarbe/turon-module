import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelVariation } from '../../variation/schemas/variation.schema';
export declare class ModelVariationSelect {
    name: Lang;
    variation: ModelVariation;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelVariationSelectSchema: mongoose.Schema<ModelVariationSelect, mongoose.Model<ModelVariationSelect, any, any, any, (mongoose.Document<unknown, any, ModelVariationSelect, any, mongoose.DefaultSchemaOptions> & ModelVariationSelect & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelVariationSelect, any, mongoose.DefaultSchemaOptions> & ModelVariationSelect & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelVariationSelect>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelVariationSelect, mongoose.Document<unknown, {}, ModelVariationSelect, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelVariationSelect & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelVariationSelect, mongoose.Document<unknown, {}, ModelVariationSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariationSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    variation?: mongoose.SchemaDefinitionProperty<ModelVariation, ModelVariationSelect, mongoose.Document<unknown, {}, ModelVariationSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariationSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelVariationSelect, mongoose.Document<unknown, {}, ModelVariationSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariationSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelVariationSelect, mongoose.Document<unknown, {}, ModelVariationSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariationSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelVariationSelect, mongoose.Document<unknown, {}, ModelVariationSelect, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelVariationSelect & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelVariationSelect>;
