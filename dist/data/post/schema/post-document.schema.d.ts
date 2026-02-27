import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelPost } from './post.schema';
export declare class ModelPostDocument {
    file?: string;
    poster?: string;
    name?: Lang;
    file_data?: Object;
    link?: string;
    position: number;
    post: ModelPost;
    is_main?: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelPostDocumentSchema: mongoose.Schema<ModelPostDocument, mongoose.Model<ModelPostDocument, any, any, any, (mongoose.Document<unknown, any, ModelPostDocument, any, mongoose.DefaultSchemaOptions> & ModelPostDocument & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPostDocument, any, mongoose.DefaultSchemaOptions> & ModelPostDocument & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPostDocument>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    file?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    poster?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: mongoose.SchemaDefinitionProperty<Lang | undefined, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    file_data?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    link?: mongoose.SchemaDefinitionProperty<string | undefined, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post?: mongoose.SchemaDefinitionProperty<ModelPost, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelPostDocument, mongoose.Document<unknown, {}, ModelPostDocument, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPostDocument & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPostDocument>;
