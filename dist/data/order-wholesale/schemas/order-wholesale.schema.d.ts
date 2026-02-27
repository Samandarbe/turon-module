import mongoose from 'mongoose';
import { ModelCountry } from '../../country';
import { ModelCustomers } from '../../customer';
export declare class ModelOrderWholesale {
    customer: ModelCustomers;
    order_id: number;
    description: string;
    date: string;
    carts: [string];
    receiver_fullname: string;
    receiver_phone_number: string;
    company_name: string;
    country: ModelCountry;
    sale_price: number;
    status: string;
}
export declare const ModelOrderWholesaleSchema: mongoose.Schema<ModelOrderWholesale, mongoose.Model<ModelOrderWholesale, any, any, any, (mongoose.Document<unknown, any, ModelOrderWholesale, any, mongoose.DefaultSchemaOptions> & ModelOrderWholesale & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelOrderWholesale, any, mongoose.DefaultSchemaOptions> & ModelOrderWholesale & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelOrderWholesale>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_id?: mongoose.SchemaDefinitionProperty<number, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: mongoose.SchemaDefinitionProperty<string, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: mongoose.SchemaDefinitionProperty<string, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    carts?: mongoose.SchemaDefinitionProperty<[string], ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiver_fullname?: mongoose.SchemaDefinitionProperty<string, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    receiver_phone_number?: mongoose.SchemaDefinitionProperty<string, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_name?: mongoose.SchemaDefinitionProperty<string, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sale_price?: mongoose.SchemaDefinitionProperty<number, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelOrderWholesale, mongoose.Document<unknown, {}, ModelOrderWholesale, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelOrderWholesale & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelOrderWholesale>;
