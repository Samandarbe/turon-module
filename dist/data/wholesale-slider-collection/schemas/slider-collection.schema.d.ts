import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelWholesaleSliderCollection {
    title: Lang;
    type: string;
    menu: ModelMenu;
    products: ModelProduct;
    position: number;
    photo: string;
    is_active?: boolean;
}
export declare const ModelWholesaleSliderCollectionSchema: mongoose.Schema<ModelWholesaleSliderCollection, mongoose.Model<ModelWholesaleSliderCollection, any, any, any, (mongoose.Document<unknown, any, ModelWholesaleSliderCollection, any, mongoose.DefaultSchemaOptions> & ModelWholesaleSliderCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelWholesaleSliderCollection, any, mongoose.DefaultSchemaOptions> & ModelWholesaleSliderCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelWholesaleSliderCollection>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: mongoose.SchemaDefinitionProperty<string, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelWholesaleSliderCollection, mongoose.Document<unknown, {}, ModelWholesaleSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelWholesaleSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelWholesaleSliderCollection>;
