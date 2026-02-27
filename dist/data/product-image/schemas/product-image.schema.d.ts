import mongoose from 'mongoose';
import { ModelProduct } from '../../product';
export declare class ModelProductImage {
    photo?: string;
    image_data?: Object;
    position: number;
    product: ModelProduct;
    is_main?: boolean;
}
export declare const ModelProductImageSchema: mongoose.Schema<ModelProductImage, mongoose.Model<ModelProductImage, any, any, any, (mongoose.Document<unknown, any, ModelProductImage, any, mongoose.DefaultSchemaOptions> & ModelProductImage & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelProductImage, any, mongoose.DefaultSchemaOptions> & ModelProductImage & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelProductImage>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelProductImage, mongoose.Document<unknown, {}, ModelProductImage, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelProductImage & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    photo?: mongoose.SchemaDefinitionProperty<string | undefined, ModelProductImage, mongoose.Document<unknown, {}, ModelProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    image_data?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelProductImage, mongoose.Document<unknown, {}, ModelProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelProductImage, mongoose.Document<unknown, {}, ModelProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelProductImage, mongoose.Document<unknown, {}, ModelProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelProductImage, mongoose.Document<unknown, {}, ModelProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelProductImage>;
