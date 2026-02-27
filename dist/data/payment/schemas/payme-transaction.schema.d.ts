export declare enum PaymeStatus {
    paid = 2,
    cancel = -1,
    perform_cancel = -2,
    new = 1
}
export declare enum Payment {
    coin = 2,
    product = 1
}
export declare class ModelPayme {
    check: boolean;
    order_uid?: string;
    amount?: number;
    transaction_id: string;
    status: number;
    payment: number;
    time: string;
    is_deleted: boolean;
    deleted_at: string;
    cancel_time: number;
    create_time: number;
    perform_time: number;
    reason: number;
}
export declare const ModelPaymeSchema: import("mongoose").Schema<ModelPayme, import("mongoose").Model<ModelPayme, any, any, any, (import("mongoose").Document<unknown, any, ModelPayme, any, import("mongoose").DefaultSchemaOptions> & ModelPayme & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, ModelPayme, any, import("mongoose").DefaultSchemaOptions> & ModelPayme & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, ModelPayme>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    check?: import("mongoose").SchemaDefinitionProperty<boolean, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order_uid?: import("mongoose").SchemaDefinitionProperty<string | undefined, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number | undefined, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    transaction_id?: import("mongoose").SchemaDefinitionProperty<string, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<number, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    payment?: import("mongoose").SchemaDefinitionProperty<number, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    time?: import("mongoose").SchemaDefinitionProperty<string, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_deleted?: import("mongoose").SchemaDefinitionProperty<boolean, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    deleted_at?: import("mongoose").SchemaDefinitionProperty<string, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cancel_time?: import("mongoose").SchemaDefinitionProperty<number, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    create_time?: import("mongoose").SchemaDefinitionProperty<number, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    perform_time?: import("mongoose").SchemaDefinitionProperty<number, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reason?: import("mongoose").SchemaDefinitionProperty<number, ModelPayme, import("mongoose").Document<unknown, {}, ModelPayme, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ModelPayme & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ModelPayme>;
export declare class ClickTransaction {
    check: boolean;
    id: string;
    click_paydoc_id: string;
    order_info_id: string;
    payment: number;
    state: number;
    amount: number;
    create_time: number;
    perform_time: number;
    cancel_time: number;
    reason: number;
    prepare_id: string;
}
export declare const ClickTransactionSchema: import("mongoose").Schema<ClickTransaction, import("mongoose").Model<ClickTransaction, any, any, any, import("mongoose").Document<unknown, any, ClickTransaction, any, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, ClickTransaction>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    check?: import("mongoose").SchemaDefinitionProperty<boolean, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    id?: import("mongoose").SchemaDefinitionProperty<string, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    click_paydoc_id?: import("mongoose").SchemaDefinitionProperty<string, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    order_info_id?: import("mongoose").SchemaDefinitionProperty<string, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    payment?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    state?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    create_time?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    perform_time?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    cancel_time?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    reason?: import("mongoose").SchemaDefinitionProperty<number, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    prepare_id?: import("mongoose").SchemaDefinitionProperty<string, ClickTransaction, import("mongoose").Document<unknown, {}, ClickTransaction, {}, import("mongoose").DefaultSchemaOptions> & ClickTransaction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, ClickTransaction>;
