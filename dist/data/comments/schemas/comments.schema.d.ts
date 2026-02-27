import mongoose from 'mongoose';
import { CommentStatus } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelOrderProduct } from '../../order';
import { ModelProductInfo } from '../../product';
export declare class ModelComments {
    customer: ModelCustomers;
    product_info: ModelProductInfo;
    order_product: ModelOrderProduct;
    advantages: string;
    flaws: string;
    note: string;
    rating: number;
    images: string[];
    status: CommentStatus.proccess;
    is_anonim: boolean;
}
export declare const ModelCommentsSchema: mongoose.Schema<ModelComments, mongoose.Model<ModelComments, any, any, any, (mongoose.Document<unknown, any, ModelComments, any, mongoose.DefaultSchemaOptions> & ModelComments & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelComments, any, mongoose.DefaultSchemaOptions> & ModelComments & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelComments>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_product?: mongoose.SchemaDefinitionProperty<ModelOrderProduct, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    advantages?: mongoose.SchemaDefinitionProperty<string, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    flaws?: mongoose.SchemaDefinitionProperty<string, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    note?: mongoose.SchemaDefinitionProperty<string, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rating?: mongoose.SchemaDefinitionProperty<number, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: mongoose.SchemaDefinitionProperty<string[], ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<CommentStatus.proccess, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_anonim?: mongoose.SchemaDefinitionProperty<boolean, ModelComments, mongoose.Document<unknown, {}, ModelComments, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelComments & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelComments>;
