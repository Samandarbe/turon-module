import mongoose from 'mongoose';
import { ModelAddress } from '../../address';
import { ModelCustomers } from '../../customer';
import { ModelPickupPoint } from '../../pickup-point';
export declare class ModelOrderInfo {
    customer: ModelCustomers;
    pickup_point: ModelPickupPoint;
    address: ModelAddress;
    address_name: string;
    sale_price: number;
    coin_count: number;
    payable: number;
    share: number;
    carts: [string];
    order_id: number;
    payment_type: string;
    receiver_fullname: string;
    receiver_phone_number: string;
    date: string;
    delivery_price: number;
    delivery_pickup_point_price: number;
    delivery_type: string;
    status: string;
    order_info_id: string;
    is_deleted: boolean;
}
export declare const ModelOrderInfoSchema: mongoose.Schema<ModelOrderInfo, mongoose.Model<ModelOrderInfo, any, any, any, (mongoose.Document<unknown, any, ModelOrderInfo, any, mongoose.DefaultSchemaOptions> & ModelOrderInfo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelOrderInfo, any, mongoose.DefaultSchemaOptions> & ModelOrderInfo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelOrderInfo>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pickup_point?: mongoose.SchemaDefinitionProperty<ModelPickupPoint, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: mongoose.SchemaDefinitionProperty<ModelAddress, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address_name?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_price?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coin_count?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    payable?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    share?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    carts?: mongoose.SchemaDefinitionProperty<[string], ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_id?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    payment_type?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiver_fullname?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiver_phone_number?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    delivery_price?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    delivery_pickup_point_price?: mongoose.SchemaDefinitionProperty<number, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    delivery_type?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_info_id?: mongoose.SchemaDefinitionProperty<string, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelOrderInfo, mongoose.Document<unknown, {}, ModelOrderInfo, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderInfo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelOrderInfo>;
