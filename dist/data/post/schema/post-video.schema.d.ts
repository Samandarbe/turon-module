import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelPost } from './post.schema';
export declare class ModelPostVideo {
    file?: string;
    poster?: string;
    link?: string;
    name?: Lang;
    file_data?: Object;
    position: number;
    post: ModelPost;
    is_main?: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelPostVideoSchema: mongoose.Schema<ModelPostVideo, mongoose.Model<ModelPostVideo, any, any, any, (mongoose.Document<unknown, any, ModelPostVideo, any, mongoose.DefaultSchemaOptions> & ModelPostVideo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPostVideo, any, mongoose.DefaultSchemaOptions> & ModelPostVideo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPostVideo>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    file?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    poster?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    link?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: mongoose.SchemaDefinitionProperty<Lang | undefined, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    file_data?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post?: mongoose.SchemaDefinitionProperty<ModelPost, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelPostVideo, mongoose.Document<unknown, {}, ModelPostVideo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostVideo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPostVideo>;
