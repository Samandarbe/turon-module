import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelRetailSliderCollection {
    title: Lang;
    type: string;
    menu: ModelMenu;
    products: ModelProduct;
    position: number;
    photo: string;
    is_active?: boolean;
}
export declare const ModelRetailSliderCollectionSchema: mongoose.Schema<ModelRetailSliderCollection, mongoose.Model<ModelRetailSliderCollection, any, any, any, (mongoose.Document<unknown, any, ModelRetailSliderCollection, any, mongoose.DefaultSchemaOptions> & ModelRetailSliderCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelRetailSliderCollection, any, mongoose.DefaultSchemaOptions> & ModelRetailSliderCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelRetailSliderCollection>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: mongoose.SchemaDefinitionProperty<string, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelRetailSliderCollection, mongoose.Document<unknown, {}, ModelRetailSliderCollection, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRetailSliderCollection & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelRetailSliderCollection>;
