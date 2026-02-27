import mongoose from 'mongoose';
import { ModelPost } from './post.schema';
export declare class ModelPostImage {
    photo?: string;
    image_data?: Object;
    position: number;
    post: ModelPost;
    is_main?: boolean;
}
export declare const ModelPostImageSchema: mongoose.Schema<ModelPostImage, mongoose.Model<ModelPostImage, any, any, any, (mongoose.Document<unknown, any, ModelPostImage, any, mongoose.DefaultSchemaOptions> & ModelPostImage & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPostImage, any, mongoose.DefaultSchemaOptions> & ModelPostImage & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPostImage>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPostImage, mongoose.Document<unknown, {}, ModelPostImage, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPostImage & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    photo?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostImage, mongoose.Document<unknown, {}, ModelPostImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    image_data?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelPostImage, mongoose.Document<unknown, {}, ModelPostImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelPostImage, mongoose.Document<unknown, {}, ModelPostImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post?: mongoose.SchemaDefinitionProperty<ModelPost, ModelPostImage, mongoose.Document<unknown, {}, ModelPostImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelPostImage, mongoose.Document<unknown, {}, ModelPostImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostImage & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPostImage>;
