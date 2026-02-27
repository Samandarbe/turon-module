import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelProduct } from '../../product/schemas/product.shcema';
export declare class ModelProductVideo {
    file?: string;
    poster?: string;
    link?: string;
    iframe?: string;
    name?: Lang;
    file_data?: Object;
    position: number;
    product: ModelProduct;
    is_main?: boolean;
}
export declare const ModelProductVideoSchema: mongoose.Schema<ModelProductVideo, mongoose.Model<ModelProductVideo, any, any, any, (mongoose.Document<unknown, any, ModelProductVideo, any, mongoose.DefaultSchemaOptions> & ModelProductVideo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelProductVideo, any, mongoose.DefaultSchemaOptions> & ModelProductVideo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelProductVideo>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    file?: mongoose.SchemaDefinitionProperty<string | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    poster?: mongoose.SchemaDefinitionProperty<string | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    link?: mongoose.SchemaDefinitionProperty<string | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    iframe?: mongoose.SchemaDefinitionProperty<string | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: mongoose.SchemaDefinitionProperty<Lang | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    file_data?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelProductVideo, mongoose.Document<unknown, {}, ModelProductVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelProductVideo>;
