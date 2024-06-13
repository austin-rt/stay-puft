"use strict";
exports.__esModule = true;
exports.GetData2 = exports.GetData = exports.PostData2 = exports.PostData = void 0;
var tslib_1 = require("tslib");
function PostData(url, requestBody) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res, data, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                    })];
                case 1:
                    res = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    return [2 /*return*/, { data: data }];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, {
                            data: 'Failed'
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.PostData = PostData;
function PostData2(url, requestBody, context) {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res, data, e_2;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        credentials: 'include',
                        mode: 'cors',
                        method: 'POST',
                        headers: {
                            cookie: context.req.headers.cookie,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'X-AUTOBOT': ((_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.headers['X-AUTOBOT'])
                                ? context.req.headers['X-AUTOBOT']
                                : null,
                            'X-AF-SP': ((_b = context === null || context === void 0 ? void 0 : context.req) === null || _b === void 0 ? void 0 : _b.headers['X-AF-SP'])
                                ? context.req.headers['X-AF-SP']
                                : null,
                            'X-AF-IN-HOUSE': 'gDqHN7UEj7c3TbXEOihmsJqzr',
                            'x-forwarded-for': ((_c = context === null || context === void 0 ? void 0 : context.req) === null || _c === void 0 ? void 0 : _c.headers['x-forwarded-for'])
                                ? context.req.headers['x-forwarded-for']
                                : null,
                            'X-Forwarded-Host': ((_d = context === null || context === void 0 ? void 0 : context.req) === null || _d === void 0 ? void 0 : _d.headers['X-Forwarded-Host'])
                                ? context.req.headers['X-Forwarded-Host']
                                : null
                        },
                        body: JSON.stringify(requestBody)
                    })];
                case 1:
                    res = _e.sent();
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _e.sent();
                    return [2 /*return*/, { data: data }];
                case 4:
                    e_2 = _e.sent();
                    return [2 /*return*/, {
                            data: 'Failed'
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.PostData2 = PostData2;
function GetData(url, ctx) {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var myHeaders, res, data, e_3;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    myHeaders = {};
                    if (!ctx) return [3 /*break*/, 2];
                    myHeaders = {
                        cookie: (_b = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.cookie,
                        referer: (_d = (_c = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _c === void 0 ? void 0 : _c.headers) === null || _d === void 0 ? void 0 : _d.referer,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'X-AUTOBOT': ctx.req.headers['X-AUTOBOT'],
                        'X-AF-SP': ctx.req.headers['X-AF-SP'],
                        'x-forwarded-for': ctx.req.headers['x-forwarded-for'],
                        'X-Forwarded-Host': ctx.req.headers['X-Forwarded-Host']
                    };
                    return [4 /*yield*/, fetch(url, myHeaders)];
                case 1:
                    res = _e.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetch(url)];
                case 3:
                    res = _e.sent();
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, res.json()];
                case 5:
                    data = _e.sent();
                    return [2 /*return*/, { data: data }];
                case 6:
                    e_3 = _e.sent();
                    return [2 /*return*/, {
                            data: 'Service call failed'
                        }];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.GetData = GetData;
function GetData2(url, ctx) {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res, data, e_4;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        mode: 'cors',
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            cookie: ctx.req.headers.cookie,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'X-AUTOBOT': ((_a = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _a === void 0 ? void 0 : _a.headers['X-AUTOBOT'])
                                ? ctx.req.headers['X-AUTOBOT']
                                : null,
                            'X-AF-SP': ((_b = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _b === void 0 ? void 0 : _b.headers['X-AF-SP'])
                                ? ctx.req.headers['X-AF-SP']
                                : null,
                            'X-AF-IN-HOUSE': 'gDqHN7UEj7c3TbXEOihmsJqzr',
                            'x-forwarded-for': ((_c = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _c === void 0 ? void 0 : _c.headers['x-forwarded-for'])
                                ? ctx.req.headers['x-forwarded-for']
                                : null,
                            'X-Forwarded-Host': ((_d = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _d === void 0 ? void 0 : _d.headers['X-Forwarded-Host'])
                                ? ctx.req.headers['X-Forwarded-Host']
                                : null
                        }
                    })];
                case 1:
                    res = _e.sent();
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _e.sent();
                    return [2 /*return*/, { data: data }];
                case 4:
                    e_4 = _e.sent();
                    return [2 /*return*/, {
                            data: 'Service call failed'
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.GetData2 = GetData2;
//# sourceMappingURL=FetchData.js.map