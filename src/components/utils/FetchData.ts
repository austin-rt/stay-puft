export async function PostData(url: string, requestBody: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  try {
    // JSON.parse(res.toString());
    const data = await res.json();
    return { data };
  } catch (e) {
    return {
      data: 'Failed',
    };
  }
}
export async function PostData2(url: string, requestBody: any, context: any) {
  const res = await fetch(url, {
    credentials: 'include',
    mode: 'cors',
    method: 'POST',
    headers: {
      cookie: context.req.headers.cookie,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTOBOT': context?.req?.headers['X-AUTOBOT']
        ? context.req.headers['X-AUTOBOT']
        : null,
      'X-AF-SP': context?.req?.headers['X-AF-SP']
        ? context.req.headers['X-AF-SP']
        : null,
      'X-AF-IN-HOUSE': 'gDqHN7UEj7c3TbXEOihmsJqzr',
      'x-forwarded-for': context?.req?.headers['x-forwarded-for']
        ? context.req.headers['x-forwarded-for']
        : null,
      'X-Forwarded-Host': context?.req?.headers['X-Forwarded-Host']
        ? context.req.headers['X-Forwarded-Host']
        : null,
    },
    body: JSON.stringify(requestBody),
  });

  try {
    // JSON.parse(res.toString());
    const data = await res.json();
    return { data };
  } catch (e) {
    return {
      data: 'Failed',
    };
  }
}

export async function GetData(url: string, ctx: any) {
  let myHeaders = {};
  let res;

  if (ctx) {
    myHeaders = {
      cookie: ctx?.req?.headers?.cookie,
      referer: ctx?.req?.headers?.referer,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTOBOT': ctx.req.headers['X-AUTOBOT'],
      'X-AF-SP': ctx.req.headers['X-AF-SP'],
      'x-forwarded-for': ctx.req.headers['x-forwarded-for'],
      'X-Forwarded-Host': ctx.req.headers['X-Forwarded-Host'],
    };
    res = await fetch(url, myHeaders);
  } else {
    res = await fetch(url);
  }

  try {
    // JSON.parse(res.toString());
    const data = await res.json();
    return { data };
  } catch (e) {
    return {
      data: 'Service call failed',
    };
  }
}

export async function GetData2(url: string, ctx: any) {
  const res = await fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      cookie: ctx.req.headers.cookie,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTOBOT': ctx?.req?.headers['X-AUTOBOT']
        ? ctx.req.headers['X-AUTOBOT']
        : null,
      'X-AF-SP': ctx?.req?.headers['X-AF-SP']
        ? ctx.req.headers['X-AF-SP']
        : null,
      'X-AF-IN-HOUSE': 'gDqHN7UEj7c3TbXEOihmsJqzr',
      'x-forwarded-for': ctx?.req?.headers['x-forwarded-for']
        ? ctx.req.headers['x-forwarded-for']
        : null,
      'X-Forwarded-Host': ctx?.req?.headers['X-Forwarded-Host']
        ? ctx.req.headers['X-Forwarded-Host']
        : null,
    },
  });

  try {
    // JSON.parse(res.toString());

    const data = await res.json();

    return { data };
  } catch (e) {
    return {
      data: 'Service call failed',
    };
  }
}
