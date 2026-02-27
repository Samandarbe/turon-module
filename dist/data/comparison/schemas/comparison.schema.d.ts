import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelComparison {
    is_deleted: boolean;
    customer: ModelCustomers;
    menu: ModelMenu;
    products: ModelProduct[];
    showcase: string;
}
export declare const ModelComparisonSchema: mongoose.Schema<ModelComparison, mongoose.Model<ModelComparison, any, any, any, (mongoose.Document<unknown, any, ModelComparison, any, mongoose.DefaultSchemaOptions> & ModelComparison & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelComparison, any, mongoose.DefaultSchemaOptions> & ModelComparison & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelComparison>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelComparison, mongoose.Document<unknown, {}, ModelComparison, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelComparison & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelComparison, mongoose.Document<unknown, {}, ModelComparison, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComparison & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelComparison, mongoose.Document<unknown, {}, ModelComparison, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComparison & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelComparison, mongoose.Document<unknown, {}, ModelComparison, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComparison & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct[], ModelComparison, mongoose.Document<unknown, {}, ModelComparison, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComparison & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelComparison, mongoose.Document<unknown, {}, ModelComparison, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComparison & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelComparison>;
