import { Lang } from '../../interfaces';
export declare class ModelAppSetting {
    head_title: Lang;
    modal_title: Lang;
    mobile_title: Lang;
    modal_description: Lang;
    mobile_description: Lang;
    head_description: Lang;
    site_status: string;
    mobile_status: string;
    head_image: string;
    last_version: number;
    min_version: number;
    admin_logo: string;
    admin_logo_mini: string;
    keywords: string;
    post_statistic_menu: string[];
    additional_file: string;
    additional_file2: string;
    app_name: string;
    telegram_group_id: string;
    test_mode: boolean;
}
export declare const ModelAppSettingSchema: import("mongoose").Schema<ModelAppSetting, import("mongoose").Model<ModelAppSetting, any, any, any, (import("mongoose").Document<unknown, any, ModelAppSetting, any, import("mongoose").DefaultSchemaOptions> & ModelAppSetting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelAppSetting, any, import("mongoose").DefaultSchemaOptions> & ModelAppSetting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelAppSetting>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    head_title?: import("mongoose").SchemaDefinitionProperty<Lang, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    modal_title?: import("mongoose").SchemaDefinitionProperty<Lang, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mobile_title?: import("mongoose").SchemaDefinitionProperty<Lang, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    modal_description?: import("mongoose").SchemaDefinitionProperty<Lang, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mobile_description?: import("mongoose").SchemaDefinitionProperty<Lang, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    head_description?: import("mongoose").SchemaDefinitionProperty<Lang, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    site_status?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mobile_status?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    head_image?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    last_version?: import("mongoose").SchemaDefinitionProperty<number, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    min_version?: import("mongoose").SchemaDefinitionProperty<number, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    admin_logo?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    admin_logo_mini?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    keywords?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post_statistic_menu?: import("mongoose").SchemaDefinitionProperty<string[], ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    additional_file?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    additional_file2?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    app_name?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telegram_group_id?: import("mongoose").SchemaDefinitionProperty<string, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    test_mode?: import("mongoose").SchemaDefinitionProperty<boolean, ModelAppSetting, import("mongoose").Document<unknown, {}, ModelAppSetting, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelAppSetting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelAppSetting>;
