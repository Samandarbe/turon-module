import mongoose from 'mongoose';
import { ModelCountry } from '../../country';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
export declare class ModelCustomers {
    password?: string;
    password_length?: number;
    coin?: number;
    phone_number: string;
    promo_code: string;
    first_name: string;
    last_name: string;
    profile_qr: string;
    wallet: number;
    email: string;
    country: ModelCountry;
    referrer: ModelCustomers;
    birth_date: string;
    birth_date_format: Date;
    gender: string;
    lang: string;
    photo: string;
    fbToken: string;
    register_by: string;
    role: string;
    push_notification: boolean;
    sms_notification: boolean;
    email_notification: boolean;
    is_deleted: boolean;
    deleted_at: string;
}
export declare const ModelCustomersSchema: mongoose.Schema<ModelCustomers, mongoose.Model<ModelCustomers, any, any, any, (mongoose.Document<unknown, any, ModelCustomers, any, mongoose.DefaultSchemaOptions> & ModelCustomers & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelCustomers, any, mongoose.DefaultSchemaOptions> & ModelCustomers & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelCustomers>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    password?: mongoose.SchemaDefinitionProperty<string | undefined, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    password_length?: mongoose.SchemaDefinitionProperty<number | undefined, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    coin?: mongoose.SchemaDefinitionProperty<number | undefined, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone_number?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    promo_code?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    first_name?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    last_name?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profile_qr?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    wallet?: mongoose.SchemaDefinitionProperty<number, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: mongoose.SchemaDefinitionProperty<ModelCountry, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    referrer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    birth_date?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    birth_date_format?: mongoose.SchemaDefinitionProperty<Date, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gender?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lang?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    photo?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fbToken?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    register_by?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    role?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    push_notification?: mongoose.SchemaDefinitionProperty<boolean, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sms_notification?: mongoose.SchemaDefinitionProperty<boolean, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email_notification?: mongoose.SchemaDefinitionProperty<boolean, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: mongoose.SchemaDefinitionProperty<boolean, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: mongoose.SchemaDefinitionProperty<string, ModelCustomers, mongoose.Document<unknown, {}, ModelCustomers, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelCustomers & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelCustomers>;
export declare class ModelRecommentProducts {
    customer: ModelCustomers;
    showcase: string;
    menu: ModelMenu[];
}
export declare const ModelRecommentProductsSchema: mongoose.Schema<ModelRecommentProducts, mongoose.Model<ModelRecommentProducts, any, any, any, (mongoose.Document<unknown, any, ModelRecommentProducts, any, mongoose.DefaultSchemaOptions> & ModelRecommentProducts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelRecommentProducts, any, mongoose.DefaultSchemaOptions> & ModelRecommentProducts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelRecommentProducts>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelRecommentProducts, mongoose.Document<unknown, {}, ModelRecommentProducts, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelRecommentProducts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelRecommentProducts, mongoose.Document<unknown, {}, ModelRecommentProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRecommentProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelRecommentProducts, mongoose.Document<unknown, {}, ModelRecommentProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRecommentProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    menu?: mongoose.SchemaDefinitionProperty<ModelMenu[], ModelRecommentProducts, mongoose.Document<unknown, {}, ModelRecommentProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelRecommentProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelRecommentProducts>;
export declare class ModelPhotoSearchProducts {
    customer: ModelCustomers;
    showcase: string;
    products: ModelProduct[];
    ai_response: [];
}
export declare const ModelPhotoSearchProductsSchema: mongoose.Schema<ModelPhotoSearchProducts, mongoose.Model<ModelPhotoSearchProducts, any, any, any, (mongoose.Document<unknown, any, ModelPhotoSearchProducts, any, mongoose.DefaultSchemaOptions> & ModelPhotoSearchProducts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ModelPhotoSearchProducts, any, mongoose.DefaultSchemaOptions> & ModelPhotoSearchProducts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ModelPhotoSearchProducts>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ModelPhotoSearchProducts, mongoose.Document<unknown, {}, ModelPhotoSearchProducts, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ModelPhotoSearchProducts & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    customer?: mongoose.SchemaDefinitionProperty<ModelCustomers, ModelPhotoSearchProducts, mongoose.Document<unknown, {}, ModelPhotoSearchProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPhotoSearchProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showcase?: mongoose.SchemaDefinitionProperty<string, ModelPhotoSearchProducts, mongoose.Document<unknown, {}, ModelPhotoSearchProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPhotoSearchProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    products?: mongoose.SchemaDefinitionProperty<ModelProduct[], ModelPhotoSearchProducts, mongoose.Document<unknown, {}, ModelPhotoSearchProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPhotoSearchProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ai_response?: mongoose.SchemaDefinitionProperty<[], ModelPhotoSearchProducts, mongoose.Document<unknown, {}, ModelPhotoSearchProducts, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ModelPhotoSearchProducts & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPhotoSearchProducts>;
