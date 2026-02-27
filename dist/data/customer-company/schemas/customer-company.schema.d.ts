import mongoose from 'mongoose';
import { ModelCountry } from '../../country';
import { ModelCustomers } from '../../customer/schemas/customer.schema';
import { ModelDistricts } from '../../district';
import { ModelRegion } from '../../region';
export declare class ModelCustomerCompany {
    company_name: string;
    company_inn: string;
    company_okonx: string;
    company_address: string;
    origin_latitude: string;
    origin_address: string;
    origin_longitude: string;
    company_country: ModelCountry;
    company_region: ModelRegion;
    company_district: ModelDistricts;
    company_email: string;
    company_phone: string;
    post_code: string;
    director_pinfl: string;
    director_name: string;
    company_mfo: string;
    company_bank_name: string;
    company_bank_id: string;
    status: string;
    customers: [ModelCustomers];
    web_site: string;
    logo: string;
    invoice_logo: string;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelCustomerCompanySchema: mongoose.Schema<ModelCustomerCompany, mongoose.Model<ModelCustomerCompany, any, any, any, (mongoose.Document<unknown, any, ModelCustomerCompany, any, mongoose.DefaultSchemaOptions> & ModelCustomerCompany & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelCustomerCompany, any, mongoose.DefaultSchemaOptions> & ModelCustomerCompany & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelCustomerCompany>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    company_name?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_inn?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_okonx?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_address?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    origin_latitude?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    origin_address?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    origin_longitude?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_region?: mongoose.SchemaDefinitionProperty<ModelRegion, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_district?: mongoose.SchemaDefinitionProperty<ModelDistricts, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_email?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_phone?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post_code?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    director_pinfl?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    director_name?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_mfo?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_bank_name?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company_bank_id?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customers?: mongoose.SchemaDefinitionProperty<[ModelCustomers], ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    web_site?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    logo?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    invoice_logo?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelCustomerCompany, mongoose.Document<unknown, {}, ModelCustomerCompany, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomerCompany & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelCustomerCompany>;
