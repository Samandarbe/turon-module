import mongoose from 'mongoose';
import { ModelFAQCategory } from '../../faq-category';
import { Lang } from '../../interfaces';
export declare class ModelFAQ {
    question: Lang;
    answer: Lang;
    position: number;
    is_active?: boolean;
    category: ModelFAQCategory;
    is_deleted: boolean;
}
export declare const ModelFAQSchema: mongoose.Schema<ModelFAQ, mongoose.Model<ModelFAQ, any, any, any, (mongoose.Document<unknown, any, ModelFAQ, any, mongoose.DefaultSchemaOptions> & ModelFAQ & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelFAQ, any, mongoose.DefaultSchemaOptions> & ModelFAQ & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelFAQ>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    question?: mongoose.SchemaDefinitionProperty<Lang, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    answer?: mongoose.SchemaDefinitionProperty<Lang, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: mongoose.SchemaDefinitionProperty<ModelFAQCategory, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelFAQ, mongoose.Document<unknown, {}, ModelFAQ, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelFAQ & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelFAQ>;
