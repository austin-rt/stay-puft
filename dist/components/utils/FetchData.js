import { __awaiter } from "tslib";
export function PostData(url, requestBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        try {
            // JSON.parse(res.toString());
            const data = yield res.json();
            return { data };
        }
        catch (e) {
            return {
                data: 'Failed',
            };
        }
    });
}
export function PostData2(url, requestBody, context) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url, {
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
                    : null,
            },
            body: JSON.stringify(requestBody),
        });
        try {
            // JSON.parse(res.toString());
            const data = yield res.json();
            return { data };
        }
        catch (e) {
            return {
                data: 'Failed',
            };
        }
    });
}
export function GetData(url, ctx) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        let myHeaders = {};
        let res;
        if (ctx) {
            myHeaders = {
                cookie: (_b = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.cookie,
                referer: (_d = (_c = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _c === void 0 ? void 0 : _c.headers) === null || _d === void 0 ? void 0 : _d.referer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-AUTOBOT': ctx.req.headers['X-AUTOBOT'],
                'X-AF-SP': ctx.req.headers['X-AF-SP'],
                'x-forwarded-for': ctx.req.headers['x-forwarded-for'],
                'X-Forwarded-Host': ctx.req.headers['X-Forwarded-Host'],
            };
            res = yield fetch(url, myHeaders);
        }
        else {
            res = yield fetch(url);
        }
        try {
            // JSON.parse(res.toString());
            const data = yield res.json();
            return { data };
        }
        catch (e) {
            return {
                data: 'Service call failed',
            };
        }
    });
}
export function GetData2(url, ctx) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url, {
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
                    : null,
            },
        });
        try {
            // JSON.parse(res.toString());
            const data = yield res.json();
            return { data };
        }
        catch (e) {
            return {
                data: 'Service call failed',
            };
        }
    });
}
//# sourceMappingURL=FetchData.js.map