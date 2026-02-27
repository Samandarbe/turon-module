import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelRetailCollection {
    title: Lang;
    view_type: string;
    type: string;
    menu: ModelMenu;
    products: ModelProduct;
    position: number;
    is_active?: boolean;
}
export declare const ModelRetailCollectionSchema: mongoose.Schema<ModelRetailCollection, mongoose.Model<ModelRetailCollection, any, any, any, (mongoose.Document<unknown, any, ModelRetailCollection, any, mongoose.DefaultSchemaOptions> & ModelRetailCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelRetailCollection, any, mongoose.DefaultSchemaOptions> & ModelRetailCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelRetailCollection>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    view_type?: mongoose.SchemaDefinitionProperty<string, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelRetailCollection, mongoose.Document<unknown, {}, ModelRetailCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelRetailCollection>;
