import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelBanner {
    uid: number;
    title: Lang;
    photo_xl?: Object;
    photo_md?: Object;
    photo_sm?: Object;
    photo_xl_all: string;
    photo: string;
    url: string;
    section: string;
    type: string;
    banner_type: string;
    view_type: string;
    menu: ModelMenu;
    parent: ModelBanner;
    products: ModelProduct;
    showcase: string;
    photo_md_all: string;
    photo_sm_all: string;
    position: number;
    is_active?: boolean;
}
export declare const ModelBannerSchema: mongoose.Schema<ModelBanner, mongoose.Model<ModelBanner, any, any, any, (mongoose.Document<unknown, any, ModelBanner, any, mongoose.DefaultSchemaOptions> & ModelBanner & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelBanner, any, mongoose.DefaultSchemaOptions> & ModelBanner & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelBanner>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    uid?: mongoose.SchemaDefinitionProperty<number, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: mongoose.SchemaDefinitionProperty<Lang, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo_xl?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo_md?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo_sm?: mongoose.SchemaDefinitionProperty<Object | undefined, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo_xl_all?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    url?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    section?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    banner_type?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    view_type?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parent?: mongoose.SchemaDefinitionProperty<ModelBanner, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo_md_all?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo_sm_all?: mongoose.SchemaDefinitionProperty<string, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelBanner, mongoose.Document<unknown, {}, ModelBanner, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelBanner & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelBanner>;
