import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelCustomerCompany } from '../../customer-company';
import { Lang } from '../../interfaces';
import { ModelOrderInfo } from '../../order-info';
import { ModelOrderWholesale } from '../../order-wholesale';
import { ModelSubProduct } from '../../product';
export declare class ModelOrder {
    customer: ModelCustomers;
    order_info_id: ModelOrderInfo;
    order_id: string;
    origin_type: string;
    emu_order_id: {};
    emu_order_status: number;
    delivery_home_days: {};
    delivery_office_days: {};
    status: string;
}
export declare const ModelOrderSchema: mongoose.Schema<ModelOrder, mongoose.Model<ModelOrder, any, any, any, (mongoose.Document<unknown, any, ModelOrder, any, mongoose.DefaultSchemaOptions> & ModelOrder & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelOrder, any, mongoose.DefaultSchemaOptions> & ModelOrder & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelOrder>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_info_id?: mongoose.SchemaDefinitionProperty<ModelOrderInfo, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_id?: mongoose.SchemaDefinitionProperty<string, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    origin_type?: mongoose.SchemaDefinitionProperty<string, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    emu_order_id?: mongoose.SchemaDefinitionProperty<{}, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    emu_order_status?: mongoose.SchemaDefinitionProperty<number, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    delivery_home_days?: mongoose.SchemaDefinitionProperty<{}, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    delivery_office_days?: mongoose.SchemaDefinitionProperty<{}, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelOrder, mongoose.Document<unknown, {}, ModelOrder, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrder & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelOrder>;
export declare class ModelOrderProduct {
    customer: ModelCustomers;
    sub_product: ModelSubProduct;
    customer_company: ModelCustomerCompany;
    product_name: Lang;
    showcase: string;
    product_image: string;
    order: ModelOrder;
    order_wholesale: ModelOrderWholesale;
    sale_price: number;
    count: number;
    is_deleted: boolean;
    is_comment: boolean;
    status: string;
}
export declare const ModelOrderProductSchema: mongoose.Schema<ModelOrderProduct, mongoose.Model<ModelOrderProduct, any, any, any, (mongoose.Document<unknown, any, ModelOrderProduct, any, mongoose.DefaultSchemaOptions> & ModelOrderProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelOrderProduct, any, mongoose.DefaultSchemaOptions> & ModelOrderProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelOrderProduct>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sub_product?: mongoose.SchemaDefinitionProperty<ModelSubProduct, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer_company?: mongoose.SchemaDefinitionProperty<ModelCustomerCompany, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_name?: mongoose.SchemaDefinitionProperty<Lang, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    product_image?: mongoose.SchemaDefinitionProperty<string, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: mongoose.SchemaDefinitionProperty<ModelOrder, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_wholesale?: mongoose.SchemaDefinitionProperty<ModelOrderWholesale, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_price?: mongoose.SchemaDefinitionProperty<number, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    count?: mongoose.SchemaDefinitionProperty<number, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_comment?: mongoose.SchemaDefinitionProperty<boolean, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelOrderProduct, mongoose.Document<unknown, {}, ModelOrderProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelOrderProduct>;
