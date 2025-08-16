import Theme from 'rspress/theme';

const NotFoundLayout = () => <div style={{ textAlign: 'center', marginTop: 80 }}>
  <h1>404 - 页面未找到</h1>
  <p>你访问的页面不存在。</p>
  <a href="/PosterKit-docs/index.html" style={{
    display: 'inline-block',
    marginTop: 24,
    color: '#1677ff',
    borderRadius: 4,
    textDecoration: 'none'
  }}>
    take me home
  </a>
</div>

export default {
    ...Theme,
  NotFoundLayout
};

export * from 'rspress/theme';
