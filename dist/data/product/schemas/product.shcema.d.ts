import mongoose from 'mongoose';
import { ModelColor } from '../../color';
import { ModelCountry } from '../../country';
import { ModelCustomerCompany } from '../../customer-company';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelTag } from '../../tag';
import { ModelVariation } from '../../variation';
import { ModelVariationSelect } from '../../variation-select';
export declare class ModelProductInfo {
    uid: number;
    delivery_origin_type: string;
    name: Lang;
    content: Lang;
    short_content: Lang;
    min_unit: number;
    sale_count: number;
    variation_object: {};
    comment_count: number;
    rating: number;
    price_type: string;
    showcase: string;
    position: number;
    views: number;
    images: string[];
    status: string;
    menu: ModelMenu;
    tags: ModelTag;
    colors: ModelColor;
    country: ModelCountry;
    box_width: number;
    box_length: number;
    box_height: number;
    weight: number;
    menu_uid: string;
    is_active: boolean;
    customer_company: ModelCustomerCompany;
    is_deleted: boolean;
}
export declare const ModelProductInfoSchema: mongoose.Schema<ModelProductInfo, mongoose.Model<ModelProductInfo, any, any, any, (mongoose.Document<unknown, any, ModelProductInfo, any, mongoose.DefaultSchemaOptions> & ModelProductInfo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelProductInfo, any, mongoose.DefaultSchemaOptions> & ModelProductInfo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelProductInfo>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    uid?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    delivery_origin_type?: mongoose.SchemaDefinitionProperty<string, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: mongoose.SchemaDefinitionProperty<Lang, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: mongoose.SchemaDefinitionProperty<Lang, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    short_content?: mongoose.SchemaDefinitionProperty<Lang, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    min_unit?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_count?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    variation_object?: mongoose.SchemaDefinitionProperty<{}, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    comment_count?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rating?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price_type?: mongoose.SchemaDefinitionProperty<string, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    views?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: mongoose.SchemaDefinitionProperty<string[], ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: mongoose.SchemaDefinitionProperty<ModelTag, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    colors?: mongoose.SchemaDefinitionProperty<ModelColor, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    box_width?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    box_length?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    box_height?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    weight?: mongoose.SchemaDefinitionProperty<number, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu_uid?: mongoose.SchemaDefinitionProperty<string, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer_company?: mongoose.SchemaDefinitionProperty<ModelCustomerCompany, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelProductInfo, mongoose.Document<unknown, {}, ModelProductInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProductInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelProductInfo>;
export declare class ModelProduct {
    uid: number;
    images: string[];
    min_price: number;
    price: number;
    sale: number;
    rating: number;
    sale_type: string;
    is_active: boolean;
    menu: ModelMenu;
    color: ModelColor;
    product_info: ModelProductInfo;
    parameters: ModelVariation;
    country: ModelCountry;
    status: string;
    is_main?: boolean;
    is_deleted: boolean;
}
export declare const ModelProductSchema: mongoose.Schema<ModelProduct, mongoose.Model<ModelProduct, any, any, any, (mongoose.Document<unknown, any, ModelProduct, any, mongoose.DefaultSchemaOptions> & ModelProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelProduct, any, mongoose.DefaultSchemaOptions> & ModelProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelProduct>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    uid?: mongoose.SchemaDefinitionProperty<number, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: mongoose.SchemaDefinitionProperty<string[], ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    min_price?: mongoose.SchemaDefinitionProperty<number, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: mongoose.SchemaDefinitionProperty<number, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale?: mongoose.SchemaDefinitionProperty<number, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rating?: mongoose.SchemaDefinitionProperty<number, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_type?: mongoose.SchemaDefinitionProperty<string, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    color?: mongoose.SchemaDefinitionProperty<ModelColor, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parameters?: mongoose.SchemaDefinitionProperty<ModelVariation, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelProduct, mongoose.Document<unknown, {}, ModelProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelProduct>;
export declare class ModelSubProduct {
    uid: number;
    count: number;
    price: number;
    sale: number;
    sale_price: number;
    sale_type: string;
    is_active: boolean;
    product: ModelProduct;
    variations: ModelVariationSelect;
    product_info: ModelProductInfo;
    is_deleted: boolean;
    is_main?: boolean;
}
export declare const ModelSubProductSchema: mongoose.Schema<ModelSubProduct, mongoose.Model<ModelSubProduct, any, any, any, (mongoose.Document<unknown, any, ModelSubProduct, any, mongoose.DefaultSchemaOptions> & ModelSubProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelSubProduct, any, mongoose.DefaultSchemaOptions> & ModelSubProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelSubProduct>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    uid?: mongoose.SchemaDefinitionProperty<number, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    count?: mongoose.SchemaDefinitionProperty<number, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: mongoose.SchemaDefinitionProperty<number, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale?: mongoose.SchemaDefinitionProperty<number, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_price?: mongoose.SchemaDefinitionProperty<number, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_type?: mongoose.SchemaDefinitionProperty<string, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: mongoose.SchemaDefinitionProperty<boolean, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product?: mongoose.SchemaDefinitionProperty<ModelProduct, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    variations?: mongoose.SchemaDefinitionProperty<ModelVariationSelect, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_info?: mongoose.SchemaDefinitionProperty<ModelProductInfo, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_main?: mongoose.SchemaDefinitionProperty<boolean | undefined, ModelSubProduct, mongoose.Document<unknown, {}, ModelSubProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelSubProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelSubProduct>;
