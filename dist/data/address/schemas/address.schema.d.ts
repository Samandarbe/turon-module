import mongoose from 'mongoose';
import { ModelCountry } from '../../country';
import { ModelCustomers } from '../../customer';
import { ModelDistricts } from '../../district';
import { ModelRegion } from '../../region';
export declare class ModelAddress {
    country: ModelCountry;
    region: ModelRegion;
    district: ModelDistricts;
    lat: number;
    long: number;
    title: string;
    apartment?: string;
    corridor?: string;
    floor?: string;
    intercom_code?: string;
    description?: string;
    customer: ModelCustomers;
}
export declare const ModelAddressSchema: mongoose.Schema<ModelAddress, mongoose.Model<ModelAddress, any, any, any, (mongoose.Document<unknown, any, ModelAddress, any, mongoose.DefaultSchemaOptions> & ModelAddress & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelAddress, any, mongoose.DefaultSchemaOptions> & ModelAddress & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelAddress>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    region?: mongoose.SchemaDefinitionProperty<ModelRegion, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    district?: mongoose.SchemaDefinitionProperty<ModelDistricts, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lat?: mongoose.SchemaDefinitionProperty<number, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    long?: mongoose.SchemaDefinitionProperty<number, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: mongoose.SchemaDefinitionProperty<string, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    apartment?: mongoose.SchemaDefinitionProperty<string | undefined, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    corridor?: mongoose.SchemaDefinitionProperty<string | undefined, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    floor?: mongoose.SchemaDefinitionProperty<string | undefined, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    intercom_code?: mongoose.SchemaDefinitionProperty<string | undefined, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: mongoose.SchemaDefinitionProperty<string | undefined, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelAddress, mongoose.Document<unknown, {}, ModelAddress, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelAddress & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelAddress>;
