import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelWholesaleCollection {
    title: Lang;
    view_type: string;
    type: string;
    device: string;
    menu: ModelMenu;
    promo: ModelWholesaleCollection;
    products: ModelProduct;
    position: number;
    is_active?: boolean;
}
export declare const ModelWholesaleCollectionSchema: mongoose.Schema<ModelWholesaleCollection, mongoose.Model<ModelWholesaleCollection, any, any, any, (mongoose.Document<unknown, any, ModelWholesaleCollection, any, mongoose.DefaultSchemaOptions> & ModelWholesaleCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelWholesaleCollection, any, mongoose.DefaultSchemaOptions> & ModelWholesaleCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelWholesaleCollection>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    view_type?: mongoose.SchemaDefinitionProperty<string, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    device?: mongoose.SchemaDefinitionProperty<string, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    promo?: mongoose.SchemaDefinitionProperty<ModelWholesaleCollection, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelWholesaleCollection, mongoose.Document<unknown, {}, ModelWholesaleCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelWholesaleCollection>;
